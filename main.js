//helpers
const firstToUpper = (string) => {
    let first = string.charAt(0).toUpperCase()
    let rest = string.slice(1)
    return first + rest
}

//sentence factory
const sentenceFactory = () => {
    return {
        _subject: [
            'in every challenge',
            'with determination and resilience',
            'in the pursuit of dreams'
        ],
        _verb: [
            'lies',
            'can overcome',
            'paves'
        ],
        _object: [
            'an opportunity for growth and strength',
            'any adversity',
            'persistence the way to achievement'
        ],
        create(piece){
            return piece[Math.floor(Math.random() * piece.length)]
        },
        build(){
            let build = []
            build.push(this.generate(build))
            build.push(this._verb[Math.floor(Math.random() * this._verb.length)])
            build.push(this.generate(build))
            console.log(build.join(" "))
        },
        generate(array){
            let instance = Math.random() >= 0.5 ? this._object : this._subject
            if(array.length > 0){
                if(this._subject.includes(array[0])){
                    instance = this._object
                } else {
                    instance = this._subject
                }
            }
            return this.create(instance)
        }
    }
}

const sentence = sentenceFactory()
sentence.build()
