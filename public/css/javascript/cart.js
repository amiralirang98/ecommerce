

//alert("Cart working")
cartArray=[]
function addToCart(product)
{
    cartArray.push(product.src)
    console.log(cartArray)
}
function checkfunc()
{
   // console.log(localStorage)
}

function cartFunction(event)
    {
        var imgurl=event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('picture')[0].src
        var desc=(event.target.parentElement.parentElement.parentElement.getElementsByClassName('desc_below_image')[0].innerText)
        if(localStorage.getItem('cartproducts')==null)
        {
            localStorage.setItem('cartproducts','[]');
        }
        if(localStorage.getItem('cartNumber')==null)
        {
            localStorage.setItem('cartNumber','')
        }
        new_data={image:imgurl,description:desc};
        old_data=JSON.parse(localStorage.getItem('cartproducts'));
        old_data.push(new_data)
        no_of_products=old_data.length
        localStorage.setItem('cartNumber',no_of_products)
        document.getElementById('cartNumber').innerText=localStorage.getItem('cartNumber')
        localStorage.setItem('cartproducts',JSON.stringify(old_data))   
    }
    console.log(JSON.parse(localStorage.getItem('cartproducts')))
    var item=JSON.parse(localStorage.getItem('cartproducts'))
    console.log(item.length)
    document.getElementById('cartNumber').innerText=localStorage.getItem('cartNumber')
    function onCartLoad()
    {
        if(localStorage.getItem('cartproducts')==null)
        {
            document.getElementById('cart_container').innerHTML="<h1>cart is empty</h1>"
        }
        else{
            htmlcont=""
            cart_data=JSON.parse(localStorage.getItem('cartproducts'))
            for(i=0;i<cart_data.length;i++){
            document.getElementById('cart_container').innerHTML="<div class='cart_item_container'><div class='cart_item_image'><img src='"+cart_data[i].image+"' class='cart_picture'></div><div class='cart_item_description'><p>"+cart_data[i].description+"</p></div><div class='price_column'><strong>Price</strong><br><br><span>400</span></div><div class='remove_button'><button type='button' onclick='removeItem(event)'>remove</button></div></div>"+htmlcont
            htmlcont=document.getElementById('cart_container').innerHTML
        }
        }
    }
    function removeItem(event)
    {
        var removeButton=event.target
        removeButton.parentElement.parentElement.remove()

    }
