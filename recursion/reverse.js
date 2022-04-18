function reverse(str) {
  let result = '';
  function helper(ind) {
      if (ind < 0) return;
      result += str[ind];
      helper(--ind);
  }
  
  helper(str.length - 1);
  return result;
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
