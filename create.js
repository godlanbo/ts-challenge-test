const fs = require('fs')
const readline = require('readline')
const path = require('path')

const rootDirPath = path.resolve(__dirname, './challenges')
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


input.question(`题目名称：`, name => {
  const targetDirPath = `${rootDirPath}/${name}`
  fs.mkdirSync(targetDirPath)
  fs.writeFileSync(`${targetDirPath}/template.ts`, '')
  fs.writeFileSync(`${targetDirPath}/test-case.ts`, '')
  input.close()
})