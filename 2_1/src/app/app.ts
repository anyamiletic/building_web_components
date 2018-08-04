class HelloTS {
	public printMessage(){
		document.write("Hello Typescript!")
	}
}

let hello: HelloTS = new HelloTS();
hello.printMessage();