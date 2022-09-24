import React, { Component, useState } from "react";
import "../styles/App.css";

// HashMap<Integer,String> flames = new HashMap<>();
// 		flames.put(0,"Siblings");
// 		flames.put(1,"Friends");
// 		flames.put(2,"Love");
// 		flames.put(3,"Affection");
// 		flames.put(4,"Marriage");
// 		flames.put(5,"Enemy");
// 		int n = checkFlame(s1,s2);
// 		n=n%6;
// 		System.out.println(flames.get(n));
// 	}
// 	public static int checkFlame(String s1,String s2){
// 		int arr1[] = new int[26];
// 		int arr2[] = new int[26];

// 		for(int i = 0; i<s1.length();i++){
// 			arr1[s1.charAt(i)-'a']++;
// 		}

// 		for(int i = 0; i<s2.length();i++){
// 			arr2[s2.charAt(i)-'a']++;
// 		}

// 		int sum = 0;
// 		for(int i = 0; i < 26; i++){
// 			sum = sum+Math.abs(arr1[i]-arr2[i]);
// 		}
// 		return sum;
	
// 	}

// const map1 = new Map();
//     const map2 = new Map();
//     for(let i = 0; i < firstName.length; i++){
//       if(map1.has(firstName.charAt(i))){
//         map1.set(firstName.charAt(i),map1.get(firstName.charAt(i))+1);
//       }else{
//         map1.set(firstName.charAt(i),1);
//       }
//     }
//     for(let i = 0; i < secondName.length; i++){
//       if(map2.has(secondName.charAt(i))){
//         map2.set(secondName.charAt(i),map2.get(secondName.charAt(i))+1);
//       }else{
//         map2.set(secondName.charAt(i),1);
//       }
//     }
//     console.log(map1,map2);
//     let sum = 0;
function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const answer ={
    0:"Siblings",
    1:"Friends",
    2:"Love",
    3:"Affection",
    4:"Marriage",
    5:"Enemy"
  };
  let [actualAnswer,setActualAnswer] = useState(0);
  const [showAnswer,setShowAnswer] = useState(false);
  const checkFlame = ()=>{
    let map1 = new Map();
    let map2 = new Map();
    for(let char of firstName){
      if(map1.has(char)){
        map1.set(char,map1.get(char) + 1)
      }else{
        map1.set(char,1);
      }
    }   
    for(let char of secondName){
      if(map2.has(char)){
        map2.set(char,map2.get(char) + 1)
      }else{
        map2.set(char,1);
      }
    }
    
    let map3 = new Map();
    map1.forEach((value,key)=>{
      if(map2.has(key)){
        map3.set(key,Math.abs(value - map2.get(key)));
        map2.delete(key);
      }else{
        map3.set(key,value);
      }
    })
    map2.forEach((value,key)=>{
      map3.set(key,value);
    })
    console.log(map1,map2,map3);
    let ans = 0;
    map3.forEach((value)=>{
      ans += value;
    })
    console.log(ans);
    ans = ans % 6;
    console.log(ans);
    setActualAnswer(ans);
    console.log(answer[actualAnswer])
    if(firstName && secondName){
      setShowAnswer(true);
    }

  }

  const changeFirstName = (e) => {
    setFirstName(e.target.value.toLowerCase());
    console.log(firstName);
  };
  const changeSecondName = (e) => {
    setSecondName(e.target.value.toLowerCase());
    console.log(secondName);
  };
  const clearFields = () => {
    setFirstName("");
    setSecondName("");
    setShowAnswer(false);
  };
  return (
    <div id="main">
      <input
        data-testid="input1"
        placeholder="first name"
        value={firstName}
        onChange={changeFirstName}
        required
      />
      <input
        data-testid="input2"
        placeholder="second name"
        value={secondName}
        onChange={changeSecondName}
        required
      />
      <button data-testid="calculate_relationship" onClick={checkFlame}>
        Calculate Relationship Future
      </button>
      <h3 data-testid="answer">{showAnswer? answer[actualAnswer] : "Please Enter valid input"}</h3>
      <button data-testid="clear" onClick={clearFields}>Clear</button>
    </div>
  );
}

export default App;
