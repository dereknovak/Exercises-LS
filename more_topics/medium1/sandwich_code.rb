class TextAnalyzer
  def process(&block)
    text = File.read "sample_text.txt"
    block.call(text)
  end
end

analyzer = TextAnalyzer.new
analyzer.process {|text| puts "#{text.split("\n\n").size} paragraphs" }
analyzer.process {|text| puts "#{text.split("\n").size} lines" }
analyzer.process {|text| puts "#{text.split.size} words" }