const frame =document.querySelector("section");
const lists = frame.qyerySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

//article의 개수만큼 반복
for(let el of lists) {
	//각 article 요소를 45도씩 회전하고 아래로 배치
	el.style.transform = 'rotate(${deg*i}deg) translateY(-100vh)';
	i++;
}