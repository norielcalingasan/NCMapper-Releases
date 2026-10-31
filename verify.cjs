const fs=require('node:fs');const path=require('node:path');const crypto=require('node:crypto');const assert=require('node:assert/strict');
function verify(directory,release){
 const rows=fs.readFileSync(path.join(directory,'SHA256SUMS.txt'),'utf8').trim().split(/\r?\n/),seen=new Set();
 for(const row of rows){const match=/^([a-f0-9]{64})  ([A-Za-z0-9][A-Za-z0-9._-]*)$/.exec(row);assert.ok(match,'Unsafe or invalid checksum entry');const [,expected,file]=match;assert.ok(!seen.has(file),'Duplicate checksum entry');seen.add(file);assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(directory,file))).digest('hex'),expected,'Checksum mismatch: '+file);}
 assert.ok(seen.has(release.file),'Release EXE is missing from checksums');assert.ok(seen.has('source-manifest.json'),'Payload manifest is missing');
 const manifest=JSON.parse(fs.readFileSync(path.join(directory,'source-manifest.json'),'utf8'));assert.equal(manifest.artifact.file,release.file);assert.equal(manifest.artifact.sha256,release.sha256);
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(directory,release.file))).digest('hex'),release.sha256,'EXE differs from pinned release metadata');return seen.size;
}
module.exports={verify};
if(require.main===module){try{const release=JSON.parse(fs.readFileSync(path.join(__dirname,'RELEASE.json'),'utf8'));console.log('Verified '+verify(process.argv[2]??'artifacts',release)+' release assets against checksums and pinned EXE metadata.');}catch(error){console.error(error.message);process.exitCode=1;}}
