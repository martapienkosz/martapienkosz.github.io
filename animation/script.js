AOS.init();

// Panel 1 Interactivity
let iclicked=0;
let p1CLICK=document.getElementById("first");

p1CLICK.addEventListener('click', event =>{
	iclicked++;
	p1CLICK.src='p1_click.gif';
})

p1CLICK.addEventListener('mouseenter' , event =>{
	if(iclicked==0)
	{
		p1CLICK.src='p1_hover.gif';
	}

})

p1CLICK.addEventListener('mouseleave' , event =>{
	if(iclicked==0){
		p1CLICK.src='p1_still.svg';
	}
	})

//panel 3 Interactivity
//panel 3 Interactivity
let nofClicks=0;
let p3CLICK=document.getElementById("mix");
let p3Button=document.getElementById("panel3button");

p3Button.addEventListener('click', event =>{
	nofClicks++;
	if(nofClicks==1){
		p3CLICK.src='p3_click1.gif';

	}
	if(nofClicks==2){
		p3CLICK.src='p3_click2.gif';

	}
	if(nofClicks==3){
		p3CLICK.src='p3_click3.gif'
	}
	if(nofClicks==4){

		p3CLICK.src='p3_click4.gif'
	}
	if(nofClicks==5){
		p3CLICK.src='p3_click5.gif'
	}
	if(nofClicks==6){

		p3CLICK.src='p3_click6.gif'
	}
})

p3Button.addEventListener('mouseenter' , event =>{
	if(nofClicks==0)
	{
		p3CLICK.src='p3_hover1.gif';
		p3Button.innerText="Butter";
	}
	if(nofClicks==1){
		p3CLICK.src='p3_hover2.gif';
		p3Button.innerText="Sugar";
	}
	if(nofClicks==2){
		p3CLICK.src='p3_hover3.gif';
		p3Button.innerText="Flour";
	}
	if(nofClicks==3){
		p3CLICK.src='p3_hover4.gif';
		p3Button.innerText="Baking Soda";
	}
	if(nofClicks==4){
		p3CLICK.src='p3_hover5.gif';
		p3Button.innerText="Eggs";
	}
	if(nofClicks==5){
		p3CLICK.src='p3_hover6.gif';
		p3Button.innerText="Mix";
	}

})
p3Button.addEventListener('mouseleave' , event =>{
	if(nofClicks==0){
		p3CLICK.src='p3_still-01.svg';
	}
	// if(nofClicks==1){
	// 	p3CLICK.src='p3_click1.gif';
	// }
	// if(nofClicks==2){
	// 	p3CLICK.src='p3_click2.gif';
	// }

	})


//panel 4 Interactivity
let p4CLICK=document.getElementById("choice");
let p4ChocoButton=document.getElementById("p4chocobutton");
let p4NutsButton=document.getElementById("p4nutsbutton");

// choice variable correspond to either nuts or choco cookies
let choice=1;

p4ChocoButton.addEventListener('click', event =>{
	choice=1;
	p4CLICK.src='p4_click_choco.gif';
	})

p4NutsButton.addEventListener('click', event =>{
	choice=2;
	p4CLICK.src='p4_click_nut.gif';
	p6CLICK.src='p6_still_nut.PNG';
	})


//panel 5 Interactivity
let nofClicks2=0;
let p5CLICK=document.getElementById("bake");
let p5Button=document.getElementById("p5button");
p5Button.style.background='#92BDE3';

p5Button.addEventListener('click', event =>{
  nofClicks2++;
	if(nofClicks2==1){
		if(choice==1){
			p5CLICK.src='p5_1_click_choco.svg';
		}
		if(choice==2){
			p5CLICK.src='p5_1_click_nuts-01.svg';
		}
		p5Button.innerText="Preheat";
		p5Button.style.background='#5C9DD6';
	}
	if(nofClicks2==2){
		p5CLICK.src='p5_2_hover.gif';
		p5Button.innerText="Bake";
		p5Button.style.background='#317FC4';

	}
	if(nofClicks2==3){
		p5CLICK.src='p5_3_click.svg'
	}
})


p5Button.addEventListener('mouseenter' , event =>{
  if(nofClicks2==0){
  	p5Button.innerText="Add batter";
  }
  if(nofClicks2==1){
  	p5CLICK.src='p5_2_hover.gif';
  }
  if(nofClicks2==2){
  	p5CLICK.src='p5_3_hover.svg';
  }
})


p5Button.addEventListener('mouseleave' , event =>{
  if(nofClicks2==0){
  	p5CLICK.src='p5_1_still.svg';
  }
  if(nofClicks2==1){
  	p5CLICK.src='p5_2_still.svg';
	}
  if(nofClicks2==2){
  	p5CLICK.src='p5_3_still-01.svg';
  }
})


//panel 6 Interactivity
let p6CLICK=document.getElementById("celebration");

p6CLICK.addEventListener('click' , event =>{
	if(choice==1){
		p6CLICK.src='p6_click_choc.GIF';
	}
	if(choice==2){
		p6CLICK.src='p6_click_nut.GIF';
	}
})
