class WRAS {
	mobileObserver = window.matchMedia("(width < 854px)");
	tabletObserver = window.matchMedia("(width >= 854px) and (width < 1024px)");
	desktopObserver = window.matchMedia("(width >= 1024px)");

	header = document.querySelector("#wras-header");

	get headerTop() { return this.header.querySelector("#wras-header__top") }
	get headerBottom() { return this.header.querySelector("#wras-header__bottom") }
	get search() { return this.headerTop.querySelector("#wras-search") }
	get mobileSearch() { return this.headerTop.querySelector("#wras-mobile-search") }

	get navigation() { return this.headerBottom.querySelector("#wras-nav") }
	get navigationInner() { return this.navigation.querySelector("#wras-nav__inner") }
	get mobileNavigation() { return this.navigation.querySelector("#wras-mobile-nav") }

	get mobileNavTrigger() { return this.navigation.querySelector("#wras-mobile-nav__trigger") }
	get mobileSearchTrigger() { return this.mobileSearch.querySelector("#wras-mobile-search__trigger") }

	initMobile() {
		this.desktopObserver.addEventListener("change", e => this.checkDesktop(e));
		this.tabletObserver.addEventListener("change", e => this.checkTablet(e));
		this.mobileObserver.addEventListener("change", e => this.checkMobile(e));

		this.mobileNavTrigger.addEventListener("click", e => {
			e.preventDefault();
			const media = window.matchMedia("(width < 1024px)");
			if (!media.matches) return;

			this.mobileNavigation.classList.toggle("active");
		});

		this.checkDesktop(this.desktopObserver);
		this.checkTablet(this.tabletObserver);
		this.checkMobile(this.mobileObserver);

		this.initMobileNavigation();
		this.initTabletNavigation();
	}

	checkDesktop(e) {
		this.mobileNavigation.classList.remove("active");
		if (e.matches) {
			if (!this.mobileNavigation.contains(this.navigationInner)) return;
			this.navigation.appendChild(this.navigationInner);
		} else {
			if (this.mobileNavigation.contains(this.navigationInner)) return;
			this.mobileNavigation.appendChild(this.navigationInner);
		}
	}

	checkTablet(e) {
		this.mobileNavigation.classList.remove("active");
		document.body.classList.toggle("tablet", e.matches);
		this.mobileNavigation.classList.toggle("is-tablet", e.matches);
	}

	checkMobile(e) {
		this.mobileNavigation.classList.remove("active");
		document.body.classList.toggle("mobile", e.matches);
		this.mobileNavigation.classList.toggle("is-mobile", e.matches);
	}

	initTabletNavigation() {
		document.body.addEventListener("click", e => {
			if (!this.mobileNavigation.parentElement.contains(e.target)) {
				this.mobileNavigation.classList.remove("active");
			}
		});
	}

	initMobileNavigation() {
		const close = this.mobileNavigation.querySelector("#wras-mobile-nav__close");
		const navItems = this.navigationInner.querySelectorAll(".wras-nav__item");
		
		close.addEventListener("click", e => {
			e.preventDefault();
			if (!this.mobileNavigation.classList.contains("active")) return;
			this.mobileNavigation.classList.remove("active");
		});

		navItems.forEach(navItem => {
			const trigger = navItem.querySelector(".wras-subnav__toggle");
			trigger.addEventListener("click", e => {
				e.preventDefault();
				navItem.classList.toggle("is-active");
			});
		});
	}

	initSearch() {}
}

const wras = new WRAS();
wras.initMobile();