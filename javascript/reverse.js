const reverse = (str, arr=[]) => {
    if (str.length === 0) return

    const firstChar = str[0];
    reverse(str.slice(1), arr);
    arr.push(firstChar);

    if(str.length === arr.length){
        return arr.join("");
    }

}

console.log(reverse("hello everyone"));