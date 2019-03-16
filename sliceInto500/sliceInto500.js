const {readFileSync, writeFileSync} = require('fs')
const { log } = console
const l = log

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

class IpManager{
    constructor(options){
        this.fileCount = 0
		this.ipReg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
		this.bunchLength = options.bunchLength
		this.stats = {}
		this.report = this.report.bind(this)
		this.recordStats = this.recordStats.bind(this)
		this.save = this.save.bind(this)
		this.deleteInvalidIp = this.deleteInvalidIp.bind(this)
		this.shiftFirst = this.shiftFirst.bind(this)
		this.exhaustAllAndSave = this.exhaustAllAndSave.bind(this)
    }
    divideIntoSingleIPs(IPString){
        return IPString.split(";")
    }
    deleteInvalidIp(IPArray){
        return IPArray.filter(ip => this.ipReg.test(ip))
    }
    deleteDuplicateIp(IPArray){
        return [...new Set(IPArray)]
    }
    /**
      * note: impure function.
      */
    shiftFirst(arr, num){
        return arr.splice(0, num)
    }
    save(arr){
		const fileName = `./${this.fileCount}.txt`
        writeFileSync(fileName, arr.join(";")+";")
        this.fileCount++
		l(`- Produced ${fileName}. Contains ${arr.length} ip addresses`)
    }
    exhaustAllAndSave(arr){
		const self = this
        const func = compose(
            self.save,
			() => self.shiftFirst(arr, self.bunchLength),
        )
        while(arr.length > 0){
            func(arr)
        }
    }
    exec(IPString){
        const func = compose(
            this.exhaustAllAndSave,
            this.deleteDuplicateIpIp,
            this.deleteInvalidIp,
            this.divideIntoSingleIPs
        )
        func(IPString)
    }
	recordStats(key, value, arr){
		this.stats = {
			...this.stats, 
			[key]: value
		}
		return arr
	}
	report(){
		l("<< STATS >>")
		Object.keys(this.stats).forEach(key => {
			l(`${key}: ${this.stats[key]}`)
		})
		l('Operation complete')
	}
}

const sliceInto500 = (fileName="./ip.txt", options={
	bunchLength: 500
}) => {
    const manager = new IpManager(options)
	const fileContents = readFileSync(fileName, 'utf8')
	const {
        exhaustAllAndSave,
        deleteDuplicateIp,
        deleteInvalidIp,
        divideIntoSingleIPs,
		recordStats,
		report
    } = manager
    const func = compose(
		report,
		exhaustAllAndSave,
		arr => recordStats("validIPWithoutDuplicates", arr.length, arr),
        deleteDuplicateIp,
		arr => recordStats("validIP", arr.length, arr),
        deleteInvalidIp,
		arr => recordStats("totalIP", arr.length, arr),
		divideIntoSingleIPs
    )
    return func(fileContents)
}

sliceInto500("./ip.txt", {
	bunchLength: 500
})
