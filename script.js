//Variable Declaration
const body = document.querySelector("body");
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const searchContainer = document.querySelector(".search-container");

//Default Color RGB values
const defaultBodyBackground1 = [67, 77, 218];
const defaultBodyBackground2 = [34, 190, 238];
const defaultSearchContainerBackground1=[112, 148, 214];
const defaultSearchContainerBackground2=[19, 245, 253];

//Interactive Color RGB Values 
let bodyBackgroundColor1 = [67, 77, 218];
let bodyBackgroundColor2 = [34, 190, 238];
let searchContainerBackground1 = defaultSearchContainerBackground1;
let searchContainerBackground2 = defaultSearchContainerBackground2;

//Color Increment Value
const colorTick = 2;

//Search Suggestion Array
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//Filter out suggestions that don't have the entered values.
	//Sanitize the input.
	let results = fruit.filter(function (value){
		return value.toLowerCase().includes(str.toLowerCase());
	});
	//pass results and entered value to function to add list entries.
	showSuggestions(results, str);
}

function searchHandler(event) {

	//Change Background Gradient Colors
	changeBackgroundColor();
	body.style.background = setBodyBackgroundGradiant()


	//pass value of the form to the search function.
	search(input.value);

	if(event.key ==="Enter"){
		submitInput(input.value);
		clearInput();
	}
}

function showSuggestions(results, inputVal) {

	const listed = results.map(function (result){
		//check if input is empty.
		if(inputVal !== ''){
			return "<li>" + result + "</li>";
		}
	});
	//Display list of suggestions.
	suggestions.innerHTML = "<ul>" + listed.join('')+ "</ul>";
};

function useSuggestion(e) {
	//intakes the suggested value
	input.value = e.target.innerText;
	submitInput(input.value);
}

function clearInput(){
	//Clear Input, setting default value.
	input.value = '';

	//Clear Suggestions 
	suggestions.innerHTML = '';
	
	//Reset Body Background to default
	
	body.style.background = setToDefault();
	
	//Rest Search Container to default
	setSearchContainerBackgroundGradiant(defaultSearchContainerBackground1,defaultSearchContainerBackground2);
	searchContainerBackground1 = defaultSearchContainerBackground1;
	searchContainerBackground2 = defaultSearchContainerBackground2;
}

function submitInput(str){
	console.log(str);
	
}

//Set background gradient based on new values
function setBodyBackgroundGradiant(){
	return `linear-gradient(to right, rgb(${bodyBackgroundColor1}), rgb(${bodyBackgroundColor2})`
}

//Set Background gradient based on new values
function setSearchContainerBackgroundGradiant(color1, color2){
	searchContainer.style.background=("linear-gradient(to right, rgb(" + color1 + "), rgb(" + color2 +"))");
}

function changeBackgroundColor(){
	
	//Modify First Red Value
	bodyBackgroundColor1[0] = bodyBackgroundColor1[0] + 4*colorTick;
	//set lower limit of red value
	if (bodyBackgroundColor1[0]> 255){
		bodyBackgroundColor1[0] = 255;
	}

	//Modify First Green Value 
	bodyBackgroundColor1[1] = bodyBackgroundColor1[1] + 4*colorTick;
	//Set Upper Limit of green Value
	if(bodyBackgroundColor1[1]> 255){
		bodyBackgroundColor1[1] = 255;
	} 

	//Modify First Blue Value
	bodyBackgroundColor1[2] = bodyBackgroundColor1[2] + colorTick;
	if(bodyBackgroundColor1[2] > 255){
		// Set Upper Limit of Blue Value 
		bodyBackgroundColor1[2] = 255;
	}
	//Modify Second Red Value
	bodyBackgroundColor2[0] = bodyBackgroundColor2[0] - 4*colorTick;
	if(bodyBackgroundColor2[0] < 0){
		// Set lower limit of Red Value
		bodyBackgroundColor2[0] =0;
	}
	//Modify Second Green Value
	bodyBackgroundColor2[1] = bodyBackgroundColor2[1] - 4*colorTick;
	if(bodyBackgroundColor2[1] < 0){
		// Set lower limit
		bodyBackgroundColor2[1] =0;
	}
	//Modify Second Blue Value
	bodyBackgroundColor2[2] = bodyBackgroundColor2[2] - 4* colorTick;
	if(bodyBackgroundColor2[2] < 120){
		//Set Lower Limit of Blue Value
		bodyBackgroundColor2[2] = 120;
	}
}

function setToDefault(){
		return `linear-gradient(to right, rgb(${defaultBodyBackground1}), rgb(${defaultBodyBackground2})`
}

function init(){
	body.style.background = setBodyBackgroundGradiant()
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

init();