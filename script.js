const fs = require('fs')
const xml2js = require('xml2js')
const readline = require('readline-sync')

const xmlStructure = {
  informacao: {
    nome: null,
    sobrenome: null,
    idade: null,
  },
  contato: {
    telefone: null,
    emails: {
      academico: null,
      pessoal: null,
    },
  }
}

console.log('\n\nInsira seu dados abaixo: \n')

xmlStructure.informacao.nome = readline.question('Nome: ')

xmlStructure.informacao.sobrenome = readline.question('Sobrenome: ')

xmlStructure.informacao.idade = readline.question('Idade: ')

xmlStructure.contato.telefone = readline.question('Numero telefone: ')

xmlStructure.contato.emails.academico = readline.question('Email academico: ')

xmlStructure.contato.emails.pessoal = readline.question('Email pessoal: ')

const builder = new xml2js.Builder()
const xml = builder.buildObject(xmlStructure)

fs.writeFile('user.xml', xml, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('\n\nArquivo salvo com sucesso!')
  }
})