import Footer from "./footer";
import TopLogo from "./toplogo";
import QuestionsWindow from "./questions";

const questions = [
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "Componentes devem iniciar com __",
    answer: "letra maiúscula",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "Usamos o npm para __",
    answer: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes ",
  },
  {
    step: 1,
    icon: "play-outline",
    status: "init",
    question: "Usamos estado (state) para __",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

const questionsRandom = questions.sort(random);
const questionsIndex = questionsRandom.map((object, index) => ({
  ...object,
  name: `Pergunta ${index + 1}`,
}));

function random() {
  return Math.random() - 0.5;
}

export default function FlashcardsWindow() {
  return (
    <>
      <TopLogo />
      <QuestionsWindow defaultQuestions={questionsIndex} />
      <Footer defaultQuestions={questionsIndex} />
    </>
  );
}
