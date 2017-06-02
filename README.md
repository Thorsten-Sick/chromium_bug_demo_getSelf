Calling "chrome.management.getSelf" before getting optional permissions results
in "chrome.management.getAll" to still be undefined.

Expected: chrome.management.getAll to be filled with all the new functions we now have the permissions for.

Demo: View the console for this popup. Click the button, accept the permissions. See "undefined" in the console
where a function should be.