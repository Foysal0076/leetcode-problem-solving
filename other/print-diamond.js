// print diamond

const printDiamond = (n) => {
  for (let i = 1; i <= n; i++) {
    const star = '* '
    const space = '  '
    console.log(space.repeat(n - i) + star.repeat(2 * i - 1))
  }
  for (let i = n - 1; i > 0; i--) {
    const star = '* '
    const space = '  '
    console.log(space.repeat(n - i) + star.repeat(2 * i - 1))
  }
}

printDiamond(10)
