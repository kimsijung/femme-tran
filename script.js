//문장을 받으면 규칙대로 변형해서 리턴하는 함수
function translator(str){
  //문장을 글자별로 쪼개서 map을 돌린다.
  return str.split('').map(function(char){
    //글자를 자음 모음으로 분리한다.
    var d=Hangul.disassemble(char);
    //4번째 자모음이 있고, 2번째와 3번째가 모음이면 4와 3을 교체한다.
    if(d[3]&&Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])){
      var tmp=d[3];
      d[3]=d[2];
      d[2]=tmp;
    }
    return Hangul.assemble(d);
  }).join('');
};

window.addEventListener('DOMContentLoaded',function(){
  //변환 버튼을 누르면 result에 원 텍스트를 변형해 넣어준다.
  document.querySelector('.change').addEventListener('click',function(){
    //translator함수로
    var changeText=translator(document.querySelector('.original-text').value);
    //변형된 문장을 결과에 넣어준다. 
    document.querySelector('.result-text').innerText=changeText;
  });
});
