version = `cat package.json| grep -w version | awk -F '"' '{print $$4}'`
gitlab  = git@gitlab.alipay-inc.com:tiny-plugins/tinyjs-plugin-physics.git
github  = https://github.com/ant-tinyjs/tinyjs-plugin-physics.git

gitlab_package = ./_local/gitlab-package.json
github_package = ./_local/github-package.json
package = ./package.json

qtdeploy:
	@cp  ${gitlab_package} ${package}
	@git remote set-url origin ${gitlab}
	@git add -A .
	@git commit -am 'update'
	@git tag ${version}
	@git push origin master --tags
	@qtdeploy all
	@git remote set-url origin ${github}
