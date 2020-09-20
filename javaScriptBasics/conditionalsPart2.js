if (condition1) { // primary conditional statement - branches 2 execution paths
  // ...
  if (condition2) { // the only two execution path possible in condition 1
    // ...
  } else {
    // ...
  }
} else {
  // ... third path with no ifs
  if (condition4) { // 4th path
    // ...
    if (condition5) { // 5th path.
    // ...
    }
  }
}

// each if path gives a new execution path, if else offers two new paths, but we have to look at FINAL execution.

// ultimately i see 5 new paths.