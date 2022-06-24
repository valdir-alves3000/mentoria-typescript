// Como podemos melhorar o esse código usando TS?

enum EProfissao {
  atriz,
  padeiro,
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao: EProfissao;
}

let pessoa1: IPessoa = {
  nome: "maria",
  idade: 29,
  profissao: EProfissao.atriz,
};

let pessoa2: IPessoa = {
  nome: "roberto",
  idade: 19,
  profissao: EProfissao.padeiro,
};

let pessoa3: IPessoa = {
  nome: "laura",
  idade: 32,
  profissao: EProfissao.atriz,
};

let pessoa4: IPessoa = {
  nome: "carlos",
  idade: 19,
  profissao: EProfissao.padeiro,
};
