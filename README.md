# Alkaid Super App Platform (Multi-tenant PoC)

Alkaid là một nền tảng siêu ứng dụng, bản Proof of Concept (PoC), tích hợp bốn phân hệ nghiệp vụ cốt lõi:
- **E-commerce:** Thương mại điện tử.
- **Social Media:** Mạng xã hội.
- **Point of Sale (POS):** Quản lý bán hàng.
- **Affiliate:** Tiếp thị liên kết.

---

## 1. Bối cảnh & Mục tiêu (Context & Goals)
Dự án này là một Sandbox (Pet Project) được xây dựng với vai trò như một bản thiết kế kiến trúc tổng thể.

Các mục tiêu chính bao gồm:
* Ứng dụng DDD thiết kế ranh giới hệ thống lớn.
* Chuẩn hóa kiến trúc, Tech Stack và luồng CI/CD.
* Xây dựng kiến trúc Modular Monolith sẵn sàng chuyển đổi lên Microservices.

---

## 2. Tổng quan Kiến trúc & Lựa chọn Công nghệ (Architecture & Tech Stack)
Hệ thống được thiết kế phân tán, tối ưu cho Scalability và Maintainability:

* **Backend:** Java 17, Spring Boot 3, Kafka, Redis. Ứng dụng Modular Monolith & DDD.
* **Frontend:** Angular 17+ (Nx Monorepo), NgRx Signals. Ứng dụng DDD & Atomic Design (Storybook).
* **Mobile:** Flutter (iOS/Android), Clean Architecture & Platform Channels.
* **Database:** MySQL (đảm bảo ACID), phân tách logic sẵn sàng cho DB-per-service.
* **DevOps:** Docker, Kubernetes (K8s), CI/CD tự động (Jenkins/GitHub Actions).
* **API & Docs:** Tiếp cận API-First Design, chuẩn hóa qua Postman.

---

## 3. Cấu trúc Mã nguồn (Project Structure)
Hệ thống quản lý tập trung theo mô hình Monorepo, cấu trúc gồm 5 phân hệ chính:

```text
alkaid-super-app-platform-poc/
├── backend/   # Dịch vụ API (Java/Spring Boot, Modular Monolith)
├── frontend/  # Web Client (Angular/Nx, Atomic Design)
├── mobile/    # App iOS/Android (Flutter, Clean Architecture)
├── devops/    # Cấu hình hạ tầng (Docker, K8s), CI/CD và Database
└── docs/      # Tài liệu kiến trúc và API Contracts
```

---

## 4. Tác giả & Bản quyền (Author & Copyright)

* **Tác giả:** Bùi Vũ Hoàng
* **GitHub:** [@hoangbv-swe](https://github.com/hoangbv-swe)
* **LinkedIn:** [hoangbv-swe](https://www.linkedin.com/in/hoangbv-swe/)
* **Email:** hoangbv.dev@gmail.com

Bản quyền: © 2026 Bùi Vũ Hoàng. All Rights Reserved.<br>
Dự án Portfolio cá nhân. Nghiêm cấm sao chép, sử dụng lại mã nguồn/tài liệu khi chưa được phép.
