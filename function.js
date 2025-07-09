function clean(){
            document.getElementById("output").innerHTML = "";
        }
        
        function changeYear(birth, parameter, start){
            let birthArr = birth.split("");
            let paramArr = parameter.split("");
            if (paramArr.length < 2){
                paramArr.unshift('0');
            }
            let length = paramArr.length + start;
            console.log(birthArr, paramArr);
            for (let i = start,  j = 0; i < length; i++, j++){
                birthArr[i] = paramArr[j];
                console.log(birthArr[i], paramArr[j])
            }
            console.log(birthArr, paramArr);
            return birthArr.join("");
        }
        
        function check(parameter){
            let length = arrObj.length;
            let nameNumb = reductionMaestro(parameter);
            let boolean = false;
            let index = -1;
            console.log(nameNumb);
            for (let i = 0; i < length && !boolean; i++) {
                if (nameNumb == arrObj[i].number) {
                    boolean = true;
                    index = i;
                }
            }
            return index;
        }
        function extraction(fullname, array){
            let length = fullname.length;
            let extracted = '';
            for (let i = 0; i < length; i++){
                if (array.includes(fullname[i])){
                    extracted += fullname[i];
                }
                console.log(extracted);
            }
            return extracted;
        }

        function numberLetter(fullName){
            let numberName = '';
            let lengthName = fullName.length;
            let arrayLength = letterNumberMap.length;
            for (let i = 0; i < lengthName; i++){
                 for (let j = 0; j < arrayLength; j++){
                    if (fullName[i] == letterNumberMap[j].letter){
                        numberName += letterNumberMap[j].number;
                    }
                }
            }
            console.log(numberName);
            return numberName;
        }
        function reductionMaestro(numero) {
            let numberReducted = numero;
            const maestros = [11, 22];
            while (numberReducted > 9 && !maestros.includes(numberReducted)) {
                let sum = 0;
                let digits = numberReducted.toString().split("");
                //convierte los números a String y los incluye en un array
                for (let i = 0; i < digits.length; i++) {
                    sum += parseInt(digits[i]);
                }
                numberReducted = sum;
            }
            return numberReducted;
        }

        function extractionDate(birth){
            let numbers = '0123456789';
            let numberDate = '';
            let length = birth.length;
            for (let i = 0; i < length; i++){
                if (numbers.includes(birth[i])){
                    numberDate += birth[i];
                }
            }
            numberDate = parseInt(numberDate);
            return numberDate;
        }