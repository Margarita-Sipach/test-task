export const sendRequest = (params) => {
	const xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function(){
		if(this.readyState === 4){
			const {message} = JSON.parse(this.response)
			alert(message)
			if(this.status === 200){
				const form = document.querySelector('.form')
				form.reset()
			}
			console.log(JSON.parse(this.response))
		}
	}
	xhttp.open("POST", "https://test-task-server-2nyh.onrender.com/api/registration", true)
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhttp.send(params)
}