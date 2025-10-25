
function upperCase(str){

    let result = {
         orginalText : str,
         uppercase : str.toUpperCase()
    }
    
    return result
}

// let uppercaseResult = upperCase("Hello Javascript")
// console.log("uppercaseResult======>",uppercaseResult)




function lowerCase(str){
    
    return  {
        orginalText : str,
        lowerCase : str.toLowerCase()
    }
}

// let lowerCaseResult = lowerCase("Hello Saravanan")
// console.log("lowercaseResult======>",lowerCaseResult)








function stringLength(){
    var text = "HELLO UDYAKUMAR"
    return {
        orginalText: text,
        textLength : text.length
    }
}

// let stringLengthResult = stringLength()
// console.log("stringLengthResult======>",stringLengthResult)











function charAt(){
    var text = "Ashwin Annadurai"
    //A. Ashwin 
    let result = {
         originalText: text,
         charAt: text.charAt(5)
    }

    return result
}



// let charAtResult = charAt()
// console.log("charAtResult======>",charAtResult)

function textTrim(){
    let text = "                           Hello javascript                         "

    return {
         originalText :text.length,
         trimText : text.trim().length
    }
}




// let textTrimResult = textTrim()
// console.log("textTrimResult======>",textTrimResult)








function repeatText(){
    let text = "Sri ramajayam"

    return {
         originalText :text,
         textReapeat : text.repeat(5)
    }
}

// let repeatTextResult = repeatText()
// console.log("repeatTextResult======>",repeatTextResult)







function textReplace(){
    let text = "Sri ramajayam"

    return {
         originalText : text,
         textReapeat : text.replace("ramajayam","Ganesa!!")
    }
}

// let textReplaceResult = textReplace()
// console.log("textReplaceResult======>",textReplaceResult)









function splitConvert(){
    let text = "Sri ramajayam"

    return {
         originalText : text,
         eachElementArray : text.split(''),
         particularElement : text.split(' '),
         WholeArray : text.split()
    }
}

// let splitConvertResult = splitConvert()
// console.log("splitConvertResult======>",splitConvertResult)









function IndexofSearch(){
    let text = "Sri ramajayam"

    return {
         originalText : text,
         convertedText : text.indexOf('sri')
    }
}

let IndexofSearchResult = IndexofSearch()
console.log("IndexOFResult======>",IndexofSearchResult)









function includesSearch(){
    let text = "Sri ramajayam"

    return {
         originalText : text,
         convertedText : text.includes('Sri')
    }
}

let includesSearchResult = includesSearch()
console.log("includesSearchResult======>",includesSearchResult)

