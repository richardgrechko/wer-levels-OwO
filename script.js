fetch("./database.txt").then(e=>e.text()).then(d=>{
	// Do something
	class Info {
		constructor(opts) {
			this.name = opts.name ?? "Nothing";
			this.style = opts.style ?? "";
		}
	};
	const styles = {
		[-Infinity]: new Info({name: "Negative $\"ler\" ⁉️",style:"color:#75231a"}),
		0: new Info({name: "No $\"ler\" at all",style:"color:#bc231a"}),
		2.5: new Info({name: "No $\"ler\"",style:"color:#ff2324"}),
		10: new Info({name: "Bottomline $\"ler\"",style:"color:#ff9020"}),
		50: new Info({name: "Low $\"ler\"",style:"color:#ffff20"}),
		100: new Info({name: "Moderate $\"ler\"",style:"color:#b0ff20"}),
		250: new Info({name: "Medium $\"ler\"",style:"color:#70ff20"}),
		1000: new Info({name: "High $\"ler\"",style:"color:#20ff20"}),
		2500: new Info({name: "Borderline $\"ler\"",style:"color:#20ff70"}),
		5000: new Info({name: "Skyline $\"ler\"",style:"color:#20ffb0"}),
	}
	const data = {};
	d = d.split("\n")
	for (let i of d) {
		data[i.split(" ")[0]] = {
			value: Number(i.split(" ")[1]),
			isFurry: Boolean(i.split(" ")[2])
		}
	};
	for (let i of Object.keys(data)) {
		let op = document.createElement("option");
		op.value = i;
		op.innerHTML = i;
		document.getElementById("users").appendChild(op);
	}
	function round(x) {
		const arr = Object.keys(styles);
		if (x > 5000) return 5000;
		for (let i in arr) {
			if (arr[i] > x) return arr[i - 1] ?? 0
		}
	}
	setInterval(()=>{
		const currUser = document.getElementById("users").value
		const val = data[currUser].value;
		document.getElementById("output").innerHTML = `${document.getElementById("users").value} has <span style="
		${styles[round(val)].style}
		">${styles[round(val)].name.replaceAll(`$"ler"`,(data[currUser].isFurry)?"wer":"ler")}</span> (Ler level: ${val})`;
	}, 16)
})
