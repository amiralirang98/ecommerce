var rethtml=""
var retimage=""
var retarrayimage=""
for (let index = 0; index < 5; index++) {
    document.getElementById('tst').innerHTML= rethtml+"<h1 class='testclass'>"+index+"</h1>";
    rethtml=document.getElementById('tst').innerHTML

}
var arr = ['download','citylights','lakeside','fireman','marble','wedges','marble1','citylights','download','citylights','lakeside','fireman']
var arrayDivide=[]
const len=arr.length
var x=0;
var y=0;
var max=0;
var arrPointer=0
if(len%6==0)
{
    x=len/6
    y=0
    max=x;
}
else{
    x=parseInt(len/6);
    y=len%6;
    max=x+1
}
var pointer=-1
document.getElementById('page_num').innerHTML=pointer;
var url="/css/images/"
if(arr.length<=6)
{
for (let index = 0; index < arr.length; index++) {
    imgurl=url+arr[index]+".jpg"
    document.getElementById('imgcont').innerHTML="<div class='image image-1'><img class='picture' src='"+imgurl+"' alt=></div>"+retimage;
    retimage=document.getElementById('imgcont').innerHTML

}
}
else{
    var start=0;
    var end=6;
    for(let i=0; i<x; i++)
    {
        arrayDivide[i]=arr.slice(start,end)
        start=end;
        end=end+6;
    }
    arrayDivide.push(arr.slice(start,start+(y)));
    console.log(arrayDivide)
    pushToStack()
    
    /*if(len%6==0)
    {
         x=len/6;
    }
    else{
         x=parseInt(len/6);
         y=len%6
        console.log(y)
        document.getElementById('imgcont').innerHTML="<p>windows of unequal length"+(x+1)+" window will be formed with"+y+"extra elements remaining in last window</p>"
     
        
    }*/
}
    function pushToStack(){
    if(pointer>=max)
    {
        document.getElementById('page_num').innerHTML=pointer+1
    }
    else{
        if(pointer!=max-1){
            pointer=pointer+1;
         }
        retarrayimage=""
        var a=arrayDivide[pointer]
        console.log(a)
        for(let i=1; i<=a.length; i++)
        {
            dispImage(a[i-1])
        }
        
        document.getElementById('page_num').innerHTML=pointer+1
         
    }   

    }
    function popFromStack(){
        if(pointer<0)
        {
            pointer=0
            document.getElementById('page_num').innerHTML=pointer+1
        }
        else{
            if(pointer!=0){
            pointer=pointer-1;
            }
            retarrayimage=""
        var a=arrayDivide[pointer]
        console.log(a)
        for(let i=1; i<=a.length; i++)
        {
            dispImage(a[i-1])
        }
        
            document.getElementById('page_num').innerHTML=pointer+1;
        }
    }
    function dispImage(image)
    {
        imgurl=url+image+".jpg"
    document.getElementById('imgcont').innerHTML="<div class='image image-1'><img class='picture' src='"+imgurl+"' alt=><div><h2>this is an image</h2></div></div>"+retarrayimage;
    retarrayimage=document.getElementById('imgcont').innerHTML
    }
    //document.getElementById('imgcont').innerHTML="<p>no of images are more</p>"