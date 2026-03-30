/**
 * Syncs sidebar plan + sessions + profile across app shell pages.
 * Expects dashboard-style markup with #sidebarPlanName, #creditsValue, #creditsSuffix (optional), #creditsBadge (optional).
 */
(function () {
  var PROFILE_KEY = 'tonipr_profile';
  var PLAN_KEY = 'tonipr_plan';

  function syncPlan() {
    var plan = localStorage.getItem(PLAN_KEY) || 'founder';
    var copy = { founder: 'Founder plan', starter: 'Starter PR Kit' };
    var el = document.getElementById('sidebarPlanName');
    if (el) el.textContent = copy[plan] || copy.founder;
    var settingsPlan = document.getElementById('settingsPlanLabel');
    if (settingsPlan) settingsPlan.textContent = copy[plan] || copy.founder;

    var credits = document.getElementById('creditsValue');
    var suffix = document.getElementById('creditsSuffix');
    var badge = document.getElementById('creditsBadge');
    if (plan === 'starter') {
      if (credits) credits.textContent = '1';
      if (suffix) suffix.textContent = 'included with Starter';
      if (badge) badge.textContent = '1 session (Starter)';
    } else {
      if (credits) credits.textContent = '11';
      if (suffix) suffix.textContent = 'remaining this year — use anytime';
      if (badge) badge.textContent = '11 sessions remaining this year';
    }
  }

  function syncProfile() {
    var p = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    var name = p.name || 'Anusha Ramachandran';
    var company = p.company || 'flowops';
    var initials = (name || '')
      .split(' ')
      .map(function (n) {
        return n[0];
      })
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'U';

    document.querySelectorAll('.sidebar-user-name').forEach(function (n) {
      n.textContent = name;
    });
    document.querySelectorAll('.sidebar-user-company').forEach(function (c) {
      c.textContent = company;
    });
    document.querySelectorAll('.sidebar-user-avatar').forEach(function (a) {
      a.textContent = initials;
    });
    var sn = document.getElementById('sidebarName');
    if (sn) sn.textContent = name;
    var sc = document.getElementById('sidebarCompany');
    if (sc) sc.textContent = company;
    var sa = document.getElementById('sidebarAvatar');
    if (sa) sa.textContent = initials;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      syncPlan();
      syncProfile();
    });
  } else {
    syncPlan();
    syncProfile();
  }
})();
