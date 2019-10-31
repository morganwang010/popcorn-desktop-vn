# [Popcorn Time VN](https://github.com/datnguyencse/popcorn-desktop-vn)

[![Dependency Status](https://david-dm.org/datnguyencse/popcorn-desktop-vn.svg)](https://david-dm.org/datnguyencse/popcorn-desktop-vn)
[![devDependency Status](https://david-dm.org/datnguyencse/popcorn-desktop-vn/dev-status.svg)](https://david-dm.org/datnguyencse/popcorn-desktop-vn#info=devDependencies)
[![Discord](https://img.shields.io/badge/discord-@Popcorn%20Time-3299EC.svg?style=flat)](https://discord.gg/kYWGjPh)



Allow any user to easily watch movies through torrent streaming, without any prerequisites.

***

## Getting Involved

Want to report a bug, request a feature, contribute to or translate Popcorn Time? Check out our in-depth guide to [Contributing to Popcorn Time](CONTRIBUTING.md#contributing-to-popcorn-time). We need all the help we can get! You can also join our [community](README.md#community) to keep up-to-date and meet other developers.

## Getting Started

If you're comfortable getting up and running from a `git clone`, this method is for you.

If you clone the GitHub repository, you will need to build a number of assets using grunt.

The [master](https://github.com/datnguyencse/popcorn-desktop-vn) branch which contains the latest release.

#### Quickstart:

1. `yarn gulp run`

If you encounter trouble with the above method, you can try:

1. `yarn config set yarn-offline-mirror ./node_modules/`
2. `yarn install --ignore-engines`
3. `yarn build`
5. `yarn gulp run`

Optionally, you may simply run `./make_popcorn.sh` if you are on a linux or mac based operating system.

Full instructions & troubleshooting tips can be found in the [Contributing Guide](CONTRIBUTING.md#contributing-to-popcorn-time).

<a name="community"></a>
## Community

Keep track of Popcorn Time development and community activity.

* Join in discussions on the [Popcorn Time Forum](https://discord.gg/kYWGjPh)

## Screenshots
![Popcorn Time Movies](https://user-images.githubusercontent.com/7203064/64246179-8a7ad480-cf36-11e9-80ce-27d2e4e5a99a.png)
![Popcorn Time Animes](https://user-images.githubusercontent.com/7203064/64246128-6d460600-cf36-11e9-8fe8-3a77e6e5d781.png)
![Popcorn Time Animes Detail](https://user-images.githubusercontent.com/7203064/64246246-aaaa9380-cf36-11e9-9e53-0248221c0e6c.png)


## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Popcorn Time will be maintained according to the [Semantic Versioning](http://semver.org/) guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>-<build>`

Constructed with the following guidelines:

* A new *major* release indicates a large change where backward compatibility is broken.
* A new *minor* release indicates a normal change that maintains backward compatibility.
* A new *patch* release indicates a bugfix or small change which does not affect compatibility.
* A new *build* release indicates this is a pre-release of the version.


***

If you distribute a copy or make a fork of the project, you have to credit this project as the source.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see http://www.gnu.org/licenses/.

***

Copyright © 2019 Popcorn Time Project - Released under the [GPL v3 license](LICENSE.txt).
