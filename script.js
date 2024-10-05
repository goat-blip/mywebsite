const codeSnippets = [
    `# Simple Python function
def greet(name):
    return f"Hello, {name}!"`,

    `# Calculate the factorial of a number
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)`,

    `# Check if a number is prime
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True`,

    `# Fibonacci series
def fibonacci(n):
    a, b = 0, 1
    series = []
    for _ in range(n):
        series.append(a)
        a, b = b, a + b
    return series`,

    `# Reverse a string
def reverse_string(s):
    return s[::-1]`,
];

// Function to fetch new code snippet
function fetchNewCode() {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    document.getElementById("codeSnippet").textContent = codeSnippets[randomIndex];
}

// Fetch new code every hour (3600000 ms)
setInterval(fetchNewCode, 3600000);

// Fetch a new code snippet immediately when the page loads
window.onload = fetchNewCode;