import moongose from 'mongoose';

const projectSchema = new moongose.Schema({
    name: {
        type: String,
        required: 'Project Name is required'
    },
    description: {
        type: String,
        required: "One description is required"
    },
    url: {
        type: String,
        match: [/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi, 'Please insert a vaild url repository'],
        require: 'URL repository is required'
    }
})

projectSchema
    .virtual('description')
    .set(function(description) {
        this._description = description
    })
    .get(function() {
        return this_description 
    })

    projectSchema.path('description').validate(function() {
        if(this._description && this._description.lenght < 10) {
            this.invalidate('description', 'Description must be least 10 characters')
        }
        if (this._description && !this_description) {
            this.invalidate('description', 'Description is required');
        }
    }, null)