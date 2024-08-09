function helloWorld(s) {
  let hello = s.replace(/\s+/g, " ").trim();
  console.log(hello); 
}


helloWorld("    Hello      World               ");

