function generateRandomName(prefix = 'User') {
  return `${prefix}_${Date.now()}`;
}

module.exports = { generateRandomName };
