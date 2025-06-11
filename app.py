from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Mock hashtag generation function
def generate_hashtags(keyword):
    base_tags = ["love", "instagood", "photooftheday", "fashion", "beautiful"]
    return [f"{keyword}{tag}" for tag in base_tags]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate')
def generate():
    keyword = request.args.get('keyword')
    if not keyword:
        return jsonify([])
    hashtags = generate_hashtags(keyword)
    return jsonify(hashtags)

if __name__ == '__main__':
    app.run(debug=True)
