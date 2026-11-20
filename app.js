document.querySelector('#year').textContent = new Date().getFullYear();
fetch('evidence.json').then(response => {
  if (!response.ok) throw new Error('Evidence unavailable');
  return response.json();
}).then(evidence => {
  if (evidence.contract_check?.status === 'verified') {
    document.querySelector('#contract-summary').textContent = evidence.contract_check.summary;
    document.querySelector('#contract-status').textContent = '已验证';
  }
}).catch(() => { /* The static page remains complete when evidence cannot load. */ });
