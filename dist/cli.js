#!/usr/bin/env node
const { Command } = require("commander");
const axios = require("axios");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => { console.log(`Hello ${name}`); });
program
    .command("breed")
    .description("Name of dog breed of Leo")
    .action(() => { console.log("I'm a Labrador Retriever"); });
program
    .command("mother")
    .description("Leo's mother")
    .action(() => { console.log("My mother name is Sreelatha"); });
program
    .command("age")
    .description("Leo's age")
    .action(() => { console.log("I'm 3 years old"); });
program
    .command("weight")
    .description("Leo's weight")
    .action(() => { console.log("My weight is 50kg"); });
program
    .command("speak")
    .description("Leo is barking")
    .action(() => { console.log("Bowww! Boww!"); });
program
    .command("image")
    .description("Image of leo")
    .action(async () => {
    try {
        const res = await axios.get("https://dog.ceo/api/breed/labrador/images/random");
        console.log(res.data.message);
    }
    catch (error) {
        console.log(error);
    }
});
const API_KEY = 'live_3n6EJBdKdV9zsVlU7UlgOY6QYRGQvyLsnxXmAA0vEMPwVcCWqMvnER4rMR9gj38b';
program
    .command("info")
    .description("Leo breed info")
    .action(async () => {
    try {
        const res = await axios.get("https://api.thedogapi.com/v1/breeds/search?q=labrador", { headers: {
                "x-api-key": API_KEY
            } });
        console.log(res.data);
        console.log(`🐺 Breed: ${res.data[0].name}`);
        console.log(`🌍 Origin: ${res.data[0].origin}`);
        console.log(`⏳ Life Span: ${res.data[0].life_span}`);
        console.log(`🧠 Temperament: ${res.data[0].temperament}\n`);
        console.log(`Description: ${res.data[0].description}`);
    }
    catch (error) {
        console.log(error);
    }
});
program
    .command("joke")
    .action(async () => {
    try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(res.data.setup);
        console.log(res.data.punchline);
    }
    catch (error) {
        console.log(error);
    }
});
program
    .command("fact")
    .action(async () => {
    try {
        const res = await axios.get("https://dogapi.dog/api/v1/facts?number=1");
        console.log("🐾 Dog Fact:");
        console.log(res.data.facts[0]);
    }
    catch (error) {
        console.log(error);
    }
});
program.parse();
