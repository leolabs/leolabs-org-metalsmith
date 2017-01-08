---
title: Updating the Hackintosh to Mavericks
date: 2013-10-27 12:22:06 Z
slug: updating-the-hackintosh-to-mavericks
---

This tuesday, Apple released its new version of Mac OS X called Mavericks. Just a few hours later, a new version of UniBeast and MultiBeast were released on tonymacx86's website that allowed the installation of Mavericks on any hackintosh. The cool thing with Mavericks is that it can be downloaded for free, so you don't have to pay for the operating system if you're building a hackintosh. I already have built a [hackintosh](http://leolabs.org/blog/hackintosh-part-1/ "Building an Ivy Bridge Hackintosh – The parts"), so I wanted to upgrade my OS from Mountain Lion to Mavericks without deleting my existing user and application data. Doing that was simple and took just about an hour.

## 1\. Download and copy Mavericks

On my Hackintosh, I just went to the App Store and downloaded Mavericks. This took about 20 minutes. While Mavericks was downloading, I went to tonymacx86.com and downloaded the new [UniBeast 3.0.1](http://www.tonymacx86.com/downloads.php?do=file&id=202 "UniBeast 3.0.1") to copy Mavericks to my USB drive. The USB drive has to be formatted in "Mac OS Extended (Journaled)", so I opened Disk Utility and formatted it. This erases everything on the USB drive, so now we have space to copy the Mavericks installer. When Mavericks finished downloading, I opened UniBeast and selected the USB drive I just formatted. On the next page, I selected "Mac App Store Mavericks - 10.9" and then let the installer do the rest. This step can take a while, depending on how fast your USB drive is. Don't get worried if the status bar doesn't do anything for a while. It doesn't really represent the progress. [![The UniBeast installer](/uploads/2013/10/Screenshot-2013-10-27-12.42.25.png)](/uploads/2013/10/Screenshot-2013-10-27-12.42.25.png)

## 2\. Install Mavericks over your existing installation

To upgrade the existing OS on my hackintosh, I just plugged in the USB drive with Mavericks and booted to the Mavericks installer. There, I selected my SSD and let it install the new OS. At that point, I didn't know if my data was going to be erased, but luckily, it didn't. After the installation, the additional drivers and tweaks that were installed by MultiBeast were erased by the installer, so I had to boot into Mavericks with the parameter "_GraphicsEnabler=No_". Using this parameter, I got into the new OS, even though some things like the ethernet connection didn't work yet. [![The new desktop](/uploads/2013/10/Screen-Shot-2013-10-27-at-12.54.00.png)](/uploads/2013/10/Screen-Shot-2013-10-27-at-12.54.00.png)  

## 3\. Install the needed patches and drivers

To make everything work again, I downloaded [MultiBeast](http://www.tonymacx86.com/downloads.php?do=file&id=201 "MultiBeast") on another computer and installed the needed patches and drivers. [![My configuration in MultiBeast](/uploads/2013/10/Screen-Shot-2013-10-27-at-13.04.46.png)](/uploads/2013/10/Screen-Shot-2013-10-27-at-13.04.46.png)   After that process finished, I restarted my hackintosh and (tadaa) now I have the newest version of Mac OS X running on it. I was very amazed about how easy it was to upgrade my hackintosh. If you have any questions about the upgrading process, just ask me in the comments below this article.