var users = [
    {
        name: "admin1",
        email: 'admin1@gmail.com',
        password:"123"
    },
    {
        name: "admin2",
        email: 'admin2@gmail.com',
        password:"456"

    }
]

var stds = [
    {
        name:'Sonu',
        mobile:"1547896587",
        email:'sonu@gmail.com'
    },
    {
        name:'Dev',
        mobile:"1547896565",
        email:'dev@gmail.com'
    },
    {
        name:'Ravi',
        mobile:"1555896587",
        email:'ravi@gmail.com'
    },
    {
        name:'Yash',
        mobile:"1547896587",
        email:'yash@gmail.com'
    },
    {
        name:'David',
        mobile:"1547896565",
        email:'david@gmail.com'
    },
    {
        name:'Jay',
        mobile:"1555896587",
        email:'jay@gmail.com'
    }
]

function logout() {
    localStorage.removeItem('email')
    window.location.href = 'reg_log.html'
}
function checkAuth () {
    var edata = localStorage.getItem('email')

    console.log(edata)
    if(edata == null || edata == 'undefined' || edata == " ")
    {
        // alert('wrong')
        window.location.href = "reg_log.html"
    }
    else {
        document.getElementById('authname').value = edata
        // document.getElementById('authname').innerHTML = edata
    }
}
function login() {
    event.preventDefault();

    var email = document.getElementById('email1').value
    var password = document.getElementById('password1').value

    var newarr = users.filter(item =>(item.email == email) && (item.password == password))

    if (newarr.length >=1)
    {
        localStorage.setItem('email',email)
        window.location.href = 'table.html'
        // alert("login done" )
    }
    else 
    {
    //    alert('login fail')

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
       
      })

    // Swal.fire (
    //     'error',
    //      'Oops...',
    //     'Something went wrong!',
    //      '<a href="">Why do I have this issue?</a>'
    //   )
    }
}
function register() {
    event.preventDefault();

    var name = document.getElementById('name').value
    var email = document.getElementById('email2').value
    var password = document.getElementById('password2').value

    var temp = {
        name: name,
        email:email,
        password:password
    }

    users.push(temp)

    document.getElementById('name').value = '';
    document.getElementById('email2').value = '';
    document.getElementById('password2').value = '';
    console.log(users)

}

function display() {
    for(i=0;i<stds.length;i++)
    {
        rowCreation(stds[i])
    }
}

function clr() {
     document.getElementById('uname').value = " "
     document.getElementById('uemail').value = " "
     document.getElementById('umob').value = " "
}
function rowCreation(data) {
    var tbody = document.getElementById('tbody')
    var tr = document.createElement('tr')

    var td = document.createElement('td')
    var textdata = document.createTextNode(data.name)
    td.appendChild(textdata)
    tr.appendChild(td)

    var td = document.createElement('td')
    var textdata = document.createTextNode(data.email)
    td.appendChild(textdata)
    tr.appendChild(td)


    var td = document.createElement('td')
    var textdata = document.createTextNode(data.mobile)
    td.appendChild(textdata)
    tr.appendChild(td)
    
    var td = document.createElement('td')
    var deletebutton = document.createElement('button')
    deletebutton.innerHTML = ('Delete')
    deletebutton.classList.add('btn') 
    deletebutton.classList.add('mx-4')
    deletebutton.classList.add('btn-danger')
    deletebutton.onclick = function() {
       var check = confirm('Are you sure you want to delete this data?')
    //    alert(check)
if(check){
    var tempdata = td.closest('tr')
    // console.log(tempdata)
    tempdata.remove()
    // Swal.fire (
    //     'error',
    //      'Oops...',
    //     'Something went wrong!',
    //      '<a href="">Why do I have this issue?</a>'
    //   )

}
    }

    var updatebutton = document.createElement('button')
    updatebutton.innerHTML = ('Update')
    updatebutton.classList.add('btn')
    updatebutton.classList.add('btn-info')

    updatebutton.classList.add('mx-4')

    updatebutton.onclick = function() {
        var tempdata = td.closest('tr')
        console.log(tempdata.rowIndex)

        var index = (tempdata.rowIndex)-1

        document.getElementById('uname').value = stds[index].name
        document.getElementById('uemail').value = stds[index].email
        document.getElementById('umob').value = stds[index].mobile

        document.getElementById('uid').value = index
    } 

    td.appendChild(deletebutton)
    td.appendChild(updatebutton)
    tr.appendChild(td)

    tbody.appendChild(tr)
    
}

function insertData() {
    var uname = document.getElementById('uname').value
    var uemail = document.getElementById('uemail').value
    var umobile = document.getElementById('umob').value

    var temp = {
        name:uname,
        email:uemail,
        mobile:umobile
    }
    rowCreation(temp)
    clr()
}

function update() {
    var userrname = document.getElementById('uname').value
    var useremail = document.getElementById('uemail').value
    var usermob = document.getElementById('umob').value
    var indexdata = document.getElementById('uid').value

    var temp = {
        name:userrname,
        email:useremail,
        mobile:usermob
    }
    stds[indexdata] = temp

    console.log(stds)

    document.getElementById('tbody').innerHTML = ' '

    display()

    clr()
}