var resultFild = $("#result")//বারবার একই লেখা না লেখে resultFild এ রেখে দিচ্ছি

//সকল  button এর কাজ
function insertNumber(number){//Calcolator এর যেকোনো বাটনে click করলে সেই সংখ্যা দেখাবে
	var existingNumber = resultFild.val()
	resultFild.val(existingNumber + number)//একসাথে অনেক গোলো সংখ্যা লেখা যাবে 
}

//C button এর কাজ
function clearResult(){//Calcolator এর c click করলে সবকিছু মুছে যাবে
	resultFild.val("")
}

//Equale button এর কাজ
function calcolate(){
	var result = eval(resultFild.val())//eval() মানে গানিতিকের যত হিসাব আছে সবকিছুর ফলাফল বাহির করে
	resultFild.val(result)
}

//Delete button এর কাজ
function deleteNumber(){
	var presentValue = resultFild.val()
	if(presentValue !=''){//নাম্বার যদি না থাকে 
		resultFild.val(resultFild.val().slice(0,-1))//শেষের নাম্বার ডিলিট করার জন্য// slice মানে কেটে ফেলা
	}
}

