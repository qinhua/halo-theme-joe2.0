> 欢迎参与 halo-theme-joe2.0 的开发，下面是参与代码贡献的指南，以供参考。

### 代码贡献步骤

#### 1. 提交 Issue

任何新功能或者功能改进建议都先提交 `issue` 讨论一下再进行开发，`bug` 修复可以直接提交 `pull request`。

#### 2. Fork 此仓库

点击右上角的 `fork` 按钮即可。

#### 3. Clone 仓库到本地

```bash
git clone https://github.com/{YOUR_USERNAME}/halo-theme-joe2.0
```

#### 4. 创建新的开发分支

```bash
git checkout -b {BRANCH_NAME}
```

#### 5. 提交代码

```bash
git push origin {BRANCH_NAME}
```

#### 6. 提交 pull request

回到自己的仓库页面，选择 `New pull request` 按钮，创建 `Pull request` 到原仓库的 `master` 分支。

然后等待我们 `Review` 即可，如有 `Change Request`，在本地修改之后再次提交即可。

#### 7. 更新主仓库代码到自己的仓库

```bash
git remote add upstream https://github.com/qinhua/halo-theme-joe2.0.git

git pull upstream master

git push
```

### 开发规范

提交前请先执行 `npm run lint` 和 `npm run build`，确保所有代码格式化且 `build` 之后再提交。
