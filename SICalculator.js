function sic()
{
    let pa = document.getElementById("pamm").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    let res=document.getElementById("do");
    if(pa=="" || r=="" || t=="")
    alert("Please add valid numbers");
  res.innerHTML="The result is" + (pa*t*r/100);
}
function reset()
{
    let a = document.getElementsByClassName("part");
    for(let i =0; i<3; i++)
    {
        a[i].value = "";
    }
    res.innerHTML="";
}

    

