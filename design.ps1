# Starts a design session with the design partner (Windows PowerShell).
# DESIGN_PARTNER=1 turns on the guard that limits edits to docs/ and blocks shell commands.
$env:DESIGN_PARTNER = "1"
claude --agent design-partner
Remove-Item Env:DESIGN_PARTNER
