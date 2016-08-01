function Entry(title, body) {
  this.titleEntry = title;
  this.bodyEntry = body;
}

Entry.prototype.words = function(bodyEntry) {
  return bodyEntry.split(" ").length;
}

Entry.prototype.vowels = function(bodyEntry) {
  bodyEntry = bodyEntry.replaceAll("[^A-Za-z]+", "").toLowerCase();
  var vowelsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "a" || bodyEntry.charAt(i) == "e" || bodyEntry.charAt(i) == "i" || bodyEntry.charAt(i) == "o" || bodyEntry.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

Entry.prototype.consonants = function(bodyEntry) {
  bodyEntry = bodyEntry.replaceAll("[^A-Za-z]+", "").toLowerCase();
  var consonantsCount = 0;
  for (var i = 0; i <= bodyEntry.length; i += 1) {
    if (bodyEntry.charAt(i) == "a" || bodyEntry.charAt(i) == "e" || bodyEntry.charAt(i) == "i" || bodyEntry.charAt(i) == "o" || bodyEntry.charAt(i) == "u") {
      consonantsCount += 0;
    } else {
      consonantsCount += 1;
    }
  }
  return consonantsCount;
}

// methods for number of words, vowels, and consonants
// method called getTeaser to return the first sentence of the entry (only the first 8 words)
