
var canvas=new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 460;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
			
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		});
		canvas.add(block_image_object);
	
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '49') // add appropriate keycode
	{
		new_image('Naruto.png')
		console.log ("1")
	}
	if(keyPressed == '50')
	{
		block_x = 200;
		new_image('Sasuke.png')
		console.log ("2")
	}
	
	if(keyPressed == '51')
	{
		block_x =350;
		new_image('Sakura.png')
		console.log ("3")// upload yellow ranger
	}
	if(keyPressed == '52')
	{
		block_x = 600;
		new_image('Hinata.png')
		console.log ("4")	// upload pink ranger
	}
	if(keyPressed == '53')
	{
		block_x = 770;
		new_image('Lee.png')
		console.log ("5")// upload blue ranger
	}
	
}

