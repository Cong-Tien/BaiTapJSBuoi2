console.log("Hello World!");

// Bài 1: Tính lương nhân viên

// Sơ đồ 3 khối
/*
   INPUT: lương 1 ngày, số ngày làm
   
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính lương = lương 1 ngày * số ngày làm
       3. log lương ra màn hình

    OUTPUT:  tổng lương   

*/ 
function salary()
{
    var salaryPerDay = + document.getElementById("txtsalaryPerDay").value;
    var workingDays= + document.getElementById("txtworkingDays").value;
    var totalSalary= salaryPerDay * workingDays;
    document.getElementById("result1").innerHTML = totalSalary.toLocaleString().split(',').join('.');

}

// Bài 2: Tính giá trị trung bình

// Sơ đồ 3 khối
/*
   INPUT: 5 số thực
   
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính giá trị trung bình = tổng 5 số / 5
       3. log trung bình cộng ra màn hình

    OUTPUT:  giá trị trung bình của 5 số đó

*/ 
function average()
{
    var float1 = +document.getElementById("float1").value; 
    var float2 = +document.getElementById("float2").value; 
    var float3 = +document.getElementById("float3").value; 
    var float4 = +document.getElementById("float4").value; 
    var float5 = +document.getElementById("float5").value; 
    var average = (float1+float2+float3+float4+float5)/5;
    document.getElementById("result2").innerHTML = average;
}


// Bài 3: Quy đổi tiền

// Sơ đồ 3 khối
/*
   INPUT: tiền USD
   
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính VND = tiền USD * 235000
       3. log tiền VND ra màn hình

    OUTPUT:  giá trị tiền VND

*/ 
function exchange()
{
    var USD = document.getElementById("txtUSD").value*1;
    var VND = USD * 23500;
    document.getElementById("result3").innerHTML = VND.toLocaleString() + " VNĐ";
    console.log(VND)
}


// Bài 4: Tính chu vi, diện tích hình chữ nhật


// Sơ đồ 3 khối
/*
   INPUT: chiều dài, chiều rộng
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính chu vi = chiều dài + chiều rộng ; 
       3. diện tích = chiều dài * chiều rộng;
       4. log chu vi và diện tích ra màn hình

    OUTPUT:  chu vi và diện tích

*/ 

function perimeterArea()
{
    var longs = +document.getElementById("txtlongs").value;
    var width = +document.getElementById("txtwidth").value;

    var perimeter = longs + width;
    var area = longs * width;

    document.getElementById("result4.1").innerHTML = "Chu vi là: " + perimeter;
    document.getElementById("result4.2").innerHTML = "Diện tích là: " + area;
}




// Bài 5: Tính tổng 2 ký số

// Sơ đồ 3 khối
/*
   INPUT: một số có 2 chữ số
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính tổng 2 ký số = (số đó % 10) + ( số đó /10 làm tòn xuống)
       3. log tổng 2 ký số ra màn hình

    OUTPUT:  tổng 2 ký số 

*/ 

function total2Digits()
{
    var number = +document.getElementById("txtNumber").value;
    if(number < 0 || number >99)
    {
        document.getElementById("result5").innerHTML= "Đây không phải là số có 2 chữ số";
    }
    else{
        // var units = number % 10;
    // var dozens = Math.floor(number/10);
    var total2Digits = number % 10 + Math.floor(number/10);
    document.getElementById("result5").innerHTML=total2Digits;
    }
    
}

