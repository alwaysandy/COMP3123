// Exercise 1
function capitalize_first_letters(s) {
    let capitalized_string = "";
    for (word of s.split(' ')) {
        capitalized_string += word[0].toUpperCase();
        capitalized_string += word.slice(1);
        capitalized_string += " ";
    }
    console.log(capitalized_string)
}

capitalize_first_letters("the quick brown fox");

// Exercise 2
function max(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


// Exercise 3
function right(s) {
    if (s.length <= 3) {
        return s;
    }

    return s.slice(s.length - 3) + s.slice(0, s.length - 3);
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Exercise 4
function angle_type(angle) {
    angle = Math.abs(angle);
    if (angle == 0) {
        return "Zero angle";
    } else if (angle < 90) {
        return "Acute angle";
    } else if (angle == 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else {
        return "Straight angle";
    }
}

console.log(angle_type(0));
console.log(angle_type(47))
console.log(angle_type(90))
console.log(angle_type(145))
console.log(angle_type(180))

// Exercise 5
function array_max_sum(arr, k) {
    let max_sum = 0;
    for (let i = 0; i < k; i++) {
        max_sum += arr[i];
    }

    let sum = max_sum;
    for (let i = k; i < arr.length; i++) {
        sum -= arr[i - k];
        sum += arr[i];
        max_sum = Math.max(sum, max_sum);
    }

    return max_sum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
