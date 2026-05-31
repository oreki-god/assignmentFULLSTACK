
    class student {
        constructor(name,marks){
            this._name = name;
            this._marks = marks;
        }

        get average(){
            let sum = 0;
            for(let i=0;i<this._marks.length;i++){
                sum += this._marks[i];
            }
            return sum/this._marks.length;
        }

        get summary(){
            let mx = 0,mn = 100;
            for(let i=0;i<this._marks.length;i++){
                let val = this._marks[i];
                if(val>mx)mx = val;
                if(val<mn)mn = val;
            }
            return [mx,mn];
        }

        get Grade(){
            let avg = this.average;
            if(avg>=85)return "A";
            else if(avg>=75)return "B";
            else if(avg>=60)return "C";
            else if(avg>=45)return "D";
            return "E";
        }
    }

    function Report(Student){
        const [score1,score2,...rem] = Student._marks;
        const avg = Student.average;
        const grade = Student.Grade;
        const { highest, lowest } = Student.summary;

        const status = avg >= 60 ? "PASS" : "FAIL";
        const card = `
        
                STUDENT REPORT CARD          
        
        Name:   ${Student._name}
        Scores: ${Student._marks.join(", ")}

        First Score:   ${score1}
        Second Score:  ${score2}
        Other Scores:  ${rem.length > 0 ? rem.join(", ") : "None"}

        Highest Score:  ${highest}
        Lowest Score:   ${lowest}
        Average Score:  ${avg.toFixed(1)}

        Letter Grade:  ${grade}
        Status:        ${status}
`;

    console.log(card);
}


    const args = process.argv;
    let nam = args[2];
    let marks;
    for(let i=3;i<args.length;i++){
        marks.push(parseInt(args[i]));
    }

    if(marks.length<3){
        console.error("ERROR!!!!!!!!!!!!!!");
        process.exit(1);
    }


