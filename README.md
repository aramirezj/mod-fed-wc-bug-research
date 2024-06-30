# Purpose

The purpose of this repository is to find why in NG17, there is a bug with module federation and web components when the Shell loads the MFEs. The error that is thrown is
`NG0909: Expected to not be in Angular Zone, but it is!.`. The applications keeps running fine even when using the distributed versions on Nginx, but the errors keeps being thrown into 
the console when the MFE is loaded and every time a MFE performs a navigations.

# Start

Every project can be started with `npm run start`.

