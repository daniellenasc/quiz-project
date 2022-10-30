class QuizGame {
  constructor() {
    this.userName = "";
    this.life = 3;
    this.selectedAnswer = [];
    this.round = 0; //SE PRECISAR
    this.questions = [
      {
        question:
          "1. Qual das cidades abaixo não possui um campus da Ironhack?",
        answers: ["Paris", "Rio de Janeiro", "Miami", "Barcelona"],
        correctAnswer: "Rio de Janeiro",
      },
      {
        question: "2. Qual o nome  dos fundadores da Ironhack?",
        answers: [
          "Bill Gates e Paul Allen",
          "Fulano e Beltrano",
          "Karen e Jino",
          "Ariel Quiñones e Gonzalo Manrique",
        ],
        correctAnswer: "Ariel Quiñones e Gonzalo Manrique",
      },
      {
        question:
          "3. Qual das cidades abaixo não possui um campus da Ironhack?",
        answers: ["Paris", "Rio de Janeiro", "Miami", "Barcelona"],
        correctAnswer: "Rio de Janeiro",
      },
    ];
  }

  //renderizar as perguntas
  startGame() {
    const btnStart = document.querySelector("#btnStart");
    const startScreen = document.querySelector("#startScreen");
    const gameScreen = document.querySelector("#gameScreen");
    const inputName = document.querySelector("#inputName");
    const name = document.querySelector("#name");
    const lifes = document.querySelector("#lifes");
    const question = document.querySelector("#question");
    const answerGroup = document.querySelectorAll(".answer");

    btnStart.addEventListener("click", () => {
      console.log("Clicou!");
      startScreen.classList.add("hide");
      gameScreen.classList.remove("hide");
      this.userName = inputName.value;
      name.innerText = inputName.value;
      //console.log(inputName.value);
      lifes.innerText = this.life;
      console.log(question, answerGroup);

      question.innerText = this.questions[this.round].question;
      answerGroup.forEach((btn, i) => {
        //console.log(answer);
        btn.innerText = this.questions[this.round].answers[i];
      });
    });
  }

  checkAnswer() {
    const answerGroup = document.querySelectorAll(".answer");
    const nextQuestion = document.querySelector(".nextQuestion");
    const lifes = document.querySelector("#lifes");

    answerGroup.forEach((btn) => {
      //console.log(btn);
      btn.addEventListener("click", () => {
        //console.log("clicando no btn");
        if (btn.innerText !== this.questions[this.round].correctAnswer) {
          console.log("ERROUU");
          this.life--;
          lifes.innerText = this.life;
          console.log(this.life);
          this.checkStatus();
        } else {
          console.log("Acertouuu");
          this.checkStatus();
        }

        nextQuestion.classList.remove("hide");
      });
    });

    nextQuestion.addEventListener("click", () => {
      this.next();
    });
  }

  next() {
    const nextQuestion = document
      .querySelector(".nextQuestion")
      .classList.add("hide");
    const btn = document.querySelectorAll(".answer");

    btn[0].disabled = false;
    btn[1].disabled = false;
    btn[2].disabled = false;
    btn[3].disabled = false;

    this.round++;
    const question = document.querySelector("#question");
    const answerGroup = document.querySelectorAll(".answer");
    question.innerText = this.questions[this.round].question;
    answerGroup.forEach((btn, i) => {
      //console.log(answer);
      btn.innerText = this.questions[this.round].answers[i];
    });
  }

  checkStatus() {
    const btn = document.querySelectorAll(".answer");

    btn[0].disabled = true;
    btn[1].disabled = true;
    btn[2].disabled = true;
    btn[3].disabled = true;

    if (this.life === 0) {
      console.log("Você não tem mais vidas");
      window.alert("Você não tem mais vidas");
      window.location.reload();
    }
    if (this.round === this.questions.length - 1) {
      console.log("Parabéns!!!");
      window.alert("Parabéns!!!");
      window.location.reload();
    }
  }
}
