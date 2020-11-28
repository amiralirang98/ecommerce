
async function hiturl()
{
var pin=document.getElementById('pin_code').value
url='https://api.postalpincode.in/pincode/'+pin
const res= await fetch(url)
const data= await res.json()
console.log(data)
if(data[0].Status==="Error")
{
    document.getElementById('errormsg').innerText="no such pin code exist "
    document.getElementById('city').value=""
    document.getElementById('state').value=""
}
else
{
document.getElementById('errormsg').innerText=""
document.getElementById('city').value=data[0].PostOffice[0].District
document.getElementById('state').value=data[0].PostOffice[0].State
}
}