ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class StatisticsProgram {
    constructor(data){
        this.data = data;
    }

    count(){
        return this.data.length;
    }
    
    sum(){
        const sumData = this.data.reduce((sum, current) => sum += current)
        return sumData;
    }

    min(){
        return Math.min(...this.data);
    }

    max(){
        return Math.max(...this.data);
    }

    range(){
        return this.max()-this.min()
    }

    mean(){
        return this.sum() / this.count;
    }

    median(){
        const sortedData = this.data.toSorted((a,b) => a-b)
        if(this.count() % 2 === 1){
            return sortedData[(this.count()-1)/2]
        }else{
            const lowerMedian = Math.floor((this.count - 1)/2)
            const upperMedian = Math.ceil((this.count - 1)/2)
            return (lowerMedian + upperMedian) / 2;
        }
    }

    mode(){

    }
}

let statistics = new StatisticsProgram(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]