import { Component, HostBinding, inject, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserUpdateComponent } from '../../components/user-update/user-update.component';
import { ProfileHistoryComponent } from '../../components/profile-history/profile-history.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, UserUpdateComponent, ProfileHistoryComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() id: string;
  @HostBinding('class.grid-auto') autoGridClass = true;
  private readonly router = inject(Router);
  activeTab: string = 'history';

  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
